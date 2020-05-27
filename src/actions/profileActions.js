

import {
  SET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  // SET_CURRENT_USER
} from './types';

// Set current profile
export const setCurrentProfile = (profileData) => dispatch => {
   dispatch(setProfileLoading());
      dispatch({
        type: SET_PROFILE,
        payload: profileData
      })
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {

//   axios
//     .post('/api/profile', profileData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );

// // if (profileData.fullname === "Yash Bhatt " && profileData.firstname === "Yash " && profileData.lastname === "Bhatt" &&(profileData.status === "Developer" ||  profileData.status === "Junior Developer" || profileData.status === "Senior Developer" || profileData.status === "Manager" || profileData.status === "Student or Learning" || profileData.status === "Instructor or Teacher" ||profileData.status === " Intern" || profileData.status === " Other" ) && profileData.contact === "6387246500" && profileData.website === "www.vieuth.com" && profileData.address === "56,Buxipur Near Arya Kanya Inter College" && profileData.gender === "Male" && profileData.githubusername === "bhattyash15" && profileData.bio === "yash is here" && profileData.twitter === "http://twitter.com/bhattyash15" && profileData. facebook === "http://facebook.com/bhattyash15" && profileData.linkedin === "http://linkedin.com/bhattyash15" && profileData. youtube === "http:// youtube.com/bhattyash15" && profileData. instagram === "http://instagram.com/bhattyash15"){
//      const user={
//       user_id:"user-1",
//        name:"test",
//        email:profileData.email
//       }
//      localStorage.setItem("user", JSON.stringify(user));
//      localStorage.setItem("test", "test value"); //write
//      setTimeout(() => {
//       console.log("local storage get:", localStorage.getItem("test"));
//      }, 3000)
//    history.push('/dashboard');
  
//   }

};

// if (profileData.name === "Yash Bhatt" && newUser.email === "bhattyash15@gmail.com" && newUser.password === "Bhatt@9454" && newUser.password2 === "Bhatt@9454") {
//      const user={
//       user_id:"user-1",
//        name:"test",
//        email:newUser.email
//       }
//      localStorage.setItem("user", JSON.stringify(user));
//      localStorage.setItem("test", "test value"); //write
//      setTimeout(() => {
//       console.log("local storage get:", localStorage.getItem("test"));
//      }, 3000)
//    history.push('/login');
  
//   }
// };

// Add experience
// export const addExperience = (expData, history) => dispatch => {
//   axios
//     .post('/api/profile/experience', expData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// // Add education
// export const addEducation = (eduData, history) => dispatch => {
//   axios
//     .post('/api/profile/education', eduData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// // Delete Experience
// export const deleteExperience = id => dispatch => {
//   axios
//     .delete(`/api/profile/experience/${id}`)
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// // Delete Education
// export const deleteEducation = id => dispatch => {
//   axios
//     .delete(`/api/profile/education/${id}`)
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Get all profiles
// export const getProfiles = () => dispatch => {
//   dispatch(setProfileLoading());
//   axios
//     .get('/api/profile/all')
//     .then(res =>
//       dispatch({
//         type: GET_PROFILES,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_PROFILES,
//         payload: null
//       })
//     );
// };

// Delete account & profile
// export const deleteAccount = () => dispatch => {
//   if (window.confirm('Are you sure? This can NOT be undone!')) {
//     axios
//       .delete('/api/profile')
//       .then(res =>
//         dispatch({
//           type: SET_CURRENT_USER,
//           payload: {}
//         })
//       )
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   }
// };

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

//Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
