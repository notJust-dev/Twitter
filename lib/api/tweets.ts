import { API_URL, authToken } from './config';

export const listTweets = async () => {
  const res = await fetch(`${API_URL}/tweet`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  if (res.status === 401) {
    throw new Error('Not authorized. Please sign in');
  }
  if (res.status !== 200) {
    throw new Error('Error fetching tweets');
  }
  return await res.json();
};

export const getTweet = async (id: string) => {
  const res = await fetch(`${API_URL}/tweet/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  if (res.status === 401) {
    throw new Error('Not authorized. Please sign in');
  }
  if (res.status !== 200) {
    throw new Error('Error fetching tweets');
  }
  return await res.json();
};

export const createTweet = async (data: { content: string }) => {
  const res = await fetch(`${API_URL}/tweet`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (res.status === 401) {
    throw new Error('Not authorized. Please sign in');
  }
  if (res.status !== 200) {
    console.log(res);
    throw new Error('Error creating tweet');
  }
  return await res.json();
};
