import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaEdit,
  FaSave,
  FaTimes,
  FaSignOutAlt,
  FaInfoCircle,
  FaPhoneAlt,
  FaRunning,
  FaImage,
} from "react-icons/fa";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    height: "",
    weight: "",
    avatar: "",
    phone: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Unified state handler for profile fields
  const handleProfileChange = (field) => (e) => {
    setProfile((prev) => ({ ...prev, [field]: e.target.value }));
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUser(session.user);
        } else {
          setUser(null);
          navigate("/auth");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUser(session.user);
      } else {
        setUser(null);
        navigate("/auth");
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    setLoading(true);
    setMessage("");
    const { data, error } = await supabase
      .from("profiles")
      .select(
        `"first name", "last name", "DOB", "Gender", "Height", "Weight", avatar, phone`
      )
      .eq("user_id", user.id)
      .single();

    if (error) {
      console.error("Error fetching profile:", error);
      setMessage("Could not fetch profile. Please try again.");
    } else if (data) {
      setProfile({
        firstName: data["first name"] || "",
        lastName: data["last name"] || "",
        dob: data["DOB"] || "",
        gender: data["Gender"] || "",
        height: data["Height"] || "",
        weight: data["Weight"] || "",
        avatar: data["avatar"] || "",
        phone: data["phone"] || "",
      });
    }
    setLoading(false);
  };

  const updateProfile = async () => {
    setLoading(true);
    setMessage("");
    const { error } = await supabase
      .from("profiles")
      .upsert({
        user_id: user.id,
        "first name": profile.firstName,
        "last name": profile.lastName,
        DOB: profile.dob,
        Gender: profile.gender,
        Height: profile.height,
        Weight: profile.weight,
        avatar: profile.avatar,
        phone: profile.phone,
      })
      .select();

    if (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile. Please try again.");
    } else {
      setMessage("Profile updated successfully!");
      setIsEditing(false);
    }
    setLoading(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setMessage("");
  };

  const handleCancel = () => {
    fetchProfile(); // Revert to original data
    setIsEditing(false);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  if (!user) return null;

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      {/* Spacer for navbar */}
      <div className="h-16 sm:h-20"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
        <div className="rounded-3xl overflow-hidden shadow-2xl animate-fade-in bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex flex-col lg:flex-row">
          {/* Left Side: Profile Header & Actions */}
          <div className="w-full lg:w-1/3 p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-6 bg-gray-900/50 border-b lg:border-b-0 lg:border-r border-gray-700">
            <div className="relative">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt="Avatar"
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-teal-500 shadow-lg transition-all duration-500 hover:scale-110"
                />
              ) : (
                <FaUserCircle className="w-20 h-20 sm:w-28 sm:h-28 text-gray-500" />
              )}
              {isEditing && (
                <div className="absolute bottom-1 right-1 p-1.5 bg-teal-500 rounded-full cursor-pointer transition-all duration-300 hover:scale-125">
                  <FaEdit className="text-white text-sm" />
                </div>
              )}
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-400 break-words">
                {profile.firstName || "New"} {profile.lastName || "User"}
              </h2>
              <p className="text-gray-400 text-sm sm:text-base font-medium break-words">
                {user.email}
              </p>
            </div>
          </div>

          {/* Right Side: Profile Details and Actions */}
          <div className="w-full lg:w-2/3 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-5">
              {message && (
                <div
                  className={`p-3 sm:p-4 rounded-xl text-center font-medium transition-all duration-500 text-sm sm:text-base ${
                    message.includes("successfully")
                      ? "bg-green-600/20 text-green-300"
                      : "bg-red-600/20 text-red-300"
                  }`}
                >
                  {message}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <ProfileField
                  label="First Name"
                  value={profile.firstName}
                  isEditing={isEditing}
                  onChange={handleProfileChange("firstName")}
                />
                <ProfileField
                  label="Last Name"
                  value={profile.lastName}
                  isEditing={isEditing}
                  onChange={handleProfileChange("lastName")}
                />
                <ProfileField
                  label="Date of Birth"
                  value={profile.dob}
                  placeholder="YYYY-MM-DD"
                  isEditing={isEditing}
                  onChange={handleProfileChange("dob")}
                />
                <ProfileField
                  label="Gender"
                  value={profile.gender}
                  isEditing={isEditing}
                  onChange={handleProfileChange("gender")}
                />
                <ProfileField
                  label="Height"
                  value={profile.height}
                  isEditing={isEditing}
                  onChange={handleProfileChange("height")}
                />
                <ProfileField
                  label="Weight"
                  value={profile.weight}
                  isEditing={isEditing}
                  onChange={handleProfileChange("weight")}
                />
                <ProfileField
                  label="Phone"
                  value={profile.phone}
                  isEditing={isEditing}
                  onChange={handleProfileChange("phone")}
                />
                <ProfileField
                  label="Avatar URL"
                  value={profile.avatar}
                  isEditing={isEditing}
                  onChange={handleProfileChange("avatar")}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 pt-6">
              {isEditing ? (
                <>
                  <button
                    onClick={handleCancel}
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-5 py-3 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                  >
                    <FaTimes /> Cancel
                  </button>
                  <button
                    onClick={updateProfile}
                    disabled={loading}
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 px-5 py-3 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 disabled:bg-gray-700 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {loading ? (
                      "Saving..."
                    ) : (
                      <>
                        <FaSave /> Save
                      </>
                    )}
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEdit}
                  className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-5 py-3 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  <FaEdit /> Edit Profile
                </button>
              )}
              <button
                onClick={signOut}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 px-5 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProfileField component remains the same for consistency
const ProfileField = ({ label, value, isEditing, onChange, placeholder }) => (
  <div className="space-y-1">
    <label className="text-xs sm:text-sm text-gray-400 font-medium">
      {label}
    </label>
    {isEditing ? (
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 text-sm sm:text-base"
      />
    ) : (
      <p className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-gray-700 text-gray-300 font-semibold text-sm sm:text-base break-words">
        {value || "Not specified"}
      </p>
    )}
  </div>
);

export default Profile;
