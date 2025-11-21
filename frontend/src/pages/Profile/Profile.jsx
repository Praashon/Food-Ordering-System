import React, { useContext, useState, useEffect } from 'react';
import './Profile.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Profile = () => {
  const { userProfile, setUserProfile, token, url, fetchUserProfile } = useContext(StoreContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
  });
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userProfile) {
      setFormData({
        name: userProfile.name || '',
        phone: userProfile.phone || '',
        street: userProfile.street || '',
        city: userProfile.city || '',
        state: userProfile.state || '',
        zipcode: userProfile.zipcode || '',
        country: userProfile.country || '',
      });
      // Set current profile image as preview
      if (userProfile.profileImage) {
        setPreviewImage(`${url}/images/${userProfile.profileImage}`);
      }
    }
  }, [userProfile, url]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      
      if (profileImage) {
        formDataToSend.append('profileImage', profileImage);
      }

      const response = await axios.put(
        `${url}/api/user/profile`,
        formDataToSend,
        {
          headers: {
            token: token,
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      if (response.data.success) {
        setUserProfile(response.data.user);
        // Also refresh the user profile in context to update navbar
        await fetchUserProfile(token);
        setIsEditing(false);
        setProfileImage(null);
        // Update preview image with the new profile image
        if (response.data.user.profileImage) {
          setPreviewImage(`${url}/images/${response.data.user.profileImage}`);
        }
        alert('Profile updated successfully!');
      } else {
        alert(response.data.message || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setProfileImage(null);
    setPreviewImage(userProfile.profileImage ? `${url}/images/${userProfile.profileImage}` : null);
    // Reset form data to original values
    if (userProfile) {
      setFormData({
        name: userProfile.name || '',
        phone: userProfile.phone || '',
        street: userProfile.street || '',
        city: userProfile.city || '',
        state: userProfile.state || '',
        zipcode: userProfile.zipcode || '',
        country: userProfile.country || '',
      });
    }
  };

  if (!userProfile) {
    return (
      <div className="profile-loading">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image-section">
          <div className="profile-image">
            {previewImage ? (
              <img 
                src={previewImage} 
                alt="Profile" 
              />
            ) : (
              <div className="default-avatar">
                {userProfile.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          {isEditing && (
            <label className="image-upload-btn">
              <span>Change Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="image-upload-input"
              />
            </label>
          )}
        </div>
        <div className="profile-info">
          <h1>{userProfile.name}</h1>
          <p className="email">{userProfile.email}</p>
        </div>
      </div>

      <div className="profile-content">
        {!isEditing ? (
          <div className="profile-display">
            <h2>Profile Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Name:</label>
                <span>{userProfile.name || 'Not provided'}</span>
              </div>
              <div className="info-item">
                <label>Email:</label>
                <span>{userProfile.email}</span>
              </div>
              <div className="info-item">
                <label>Phone:</label>
                <span>{userProfile.phone || 'Not provided'}</span>
              </div>
              <div className="info-item">
                <label>Street:</label>
                <span>{userProfile.street || 'Not provided'}</span>
              </div>
              <div className="info-item">
                <label>City:</label>
                <span>{userProfile.city || 'Not provided'}</span>
              </div>
              <div className="info-item">
                <label>State:</label>
                <span>{userProfile.state || 'Not provided'}</span>
              </div>
              <div className="info-item">
                <label>Zip Code:</label>
                <span>{userProfile.zipcode || 'Not provided'}</span>
              </div>
              <div className="info-item">
                <label>Country:</label>
                <span>{userProfile.country || 'Not provided'}</span>
              </div>
            </div>
            <button 
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <div className="profile-edit">
            <h2>Edit Profile Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group full-width">
                  <label>Street Address</label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-actions">
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={handleCancel}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="save-btn"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
