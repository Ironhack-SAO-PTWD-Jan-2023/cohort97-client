import axios from 'axios';

const baseURL = 'https://ih-cohort97-api.onrender.com/api';
// const baseUrl // se fosse assim, precisaria a referência abaixo
const token = "35d93694e85b6dafc8e4fd8a52245a748510e6cdf4732ed2470bc0c496b77cab46c311ebcaea75d8affe604479dc6dde49d0481a07bf12e9ff9dff7da91dcaa04c2e2e9970b151cffb876d2057d19178406d5bbef225e7ebb660affd5909bdb9b7b295cdfa326bb317fd9410f77c7731d4d2348216cd4b2be59a359e42d7c217";

class C97Api {
  constructor() {
    this.api = axios.create({
      baseURL // baseURL: baseUrl
    });

    this.api.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`
      return config;
    })
  }

  async getAllStudents() {
    try {
      const { data } = await this.api.get('/students');
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async getOneStudent(studentId) {
    try {
      const { data } = await this.api.get(`/students/${studentId}`);
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async createStudent({name, about, age, imageURL}) {
    // if (!name || !age) {
    //   throw new Error('Missing student information: name or age.');
    // }
    const student = {
      data: {name, about, age, imageURL}
    }
    try {
      const { data } = await this.api.post('/students', student);
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async editStudent(studentId, studentObj) {
    // const student = {
    //   data: studentObj
    // }

    try {
      const { data } = await this.api.put(`/students/${studentId}`, {
        data: studentObj
      })
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async removeStudent(studentId) {
    try {
      await this.api.delete(`/students/${studentId}`);
      return;
    } catch (error) {
      throw error;
    }
  }
}

const api = new C97Api();
export default api;