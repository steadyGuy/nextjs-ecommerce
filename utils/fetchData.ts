import axios from 'axios';

const { API_URL } = process.env;

export const getData = async (url) => {
  try {
    const { data } = await axios.get(`${API_URL}/api/${url}`, {
      // headers: { Authorization: token },
    });
    return data;
  } catch (err) {
    return err.response.data;
  }
};

export const postData = async (url, post) => {
  try {
    const { data } = await axios.post(`${API_URL}/api/${url}`, post, {
      // headers: { Authorization: token },
      responseType: 'json',
    });
    return data;
  } catch (err) {
    return err.response.data;
  }
};

export const putData = async (url, post, token) => {
  const { data } = await axios.put(`${API_URL}/api/${url}`, JSON.stringify(post), {
    headers: { Authorization: token },
  });
  return data;
};

export const patchData = async (url, post, token) => {
  const { data } = await axios.patch(`${API_URL}/api/${url}`, JSON.stringify(post), {
    headers: { Authorization: token },
  });
  return data;
};

export const deleteData = async (url, token) => {
  const { data } = await axios.delete(`${API_URL}/api/${url}`, {
    headers: { Authorization: token },
  });
  return data;
};
