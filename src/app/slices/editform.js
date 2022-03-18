import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  click: 0,
  contactUs: {
    address: 'Lahore',
    phone: '0307264159',
    email: 'abc@gmail.com',
    linkedin: 'xyz.lin',
    github: null,
  },
  skills: [
    { id: 0, skill: 'C++', rang: 4 },
    { id: 1, skill: 'C#', rang: 3 },
    { id: 2, skill: 'HTML,CSS,JAVASCRIPT', rang: 5 },
    { id: 3, skill: 'NodeJS', rang: 2 },
    { id: 4, skill: 'REACTJS', rang: 3 },
  ],
  heading: {
    name: 'Zeeshan Noor',
    jobTitle: 'ReactJs Developer',
    personalInfo:'A React developer with 1 years of experience in Javascript.'
  },
  experience:{
    title:"Work Experience",
    organization:"OzoneAI",
    role:"ML Engineer",
    startDate:"Apr 2019",
    endDate:'',
    point1:"Utilized PySpark to distribute data processing on large streaming datasets to improve ingestion and processing speed of that daat by 87%",
    point2:'Build basic ETL that ingested transactional and event data from a web app with 10,000 daily active users that saved over $85,000 annually in external vendor costs'
  }
};

export const clickSlice = createSlice({
  name: 'click',
  initialState,
  reducers: {
    editFormReducer: (state, action) => {
      state.click = action.payload;
    },
    contactUsFormReducer: (state, action) => {
      const value = action.payload.address;
      const name = action.payload.name;
      const newContactUs = {
        ...state.contactUs,
      };

      newContactUs[name] = value;
      state.contactUs = newContactUs;
    },
    skillFormReducer: (state, action) => {
      const newSkill = action.payload;
      const rest = state.skills.filter((item) => {
        return item.id !== newSkill.id;
      });

      state.skills = [...rest, newSkill].sort((a, b) => {
        return a.id - b.id;
      });
    },
    HeaderFormReducer: (state, action) => {
      const value = action.payload.value;
      const name = action.payload.name;
      state.heading[name] = value;
    },
    ExperienceFormReducer: (state, action) => {
      const value = action.payload.value;
      const name = action.payload.name;
      state.experience[name] = value;
    },
  },
});

export const {
  editFormReducer,
  contactUsFormReducer,
  skillFormReducer,
  HeaderFormReducer,
  ExperienceFormReducer,
} = clickSlice.actions;

export default clickSlice.reducer;
