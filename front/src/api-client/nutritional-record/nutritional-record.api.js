import { httpClient } from '../http.client';

export async function getNutritionalRecord(foodId) {
  return (await httpClient.get(`admin/nutritionalrecord/${foodId}`)).data
    .nutritionalRecord;
}

export async function getNutritionalRecords(filter) {
  return (await httpClient.get('admin/nutritionalrecord', { params: filter}))
    .data.nutritionalRecords;
}

export async function createNutritionalRecord(data) {
  return await httpClient.post('admin/nutritionalrecord', data);
}

export async function deleteNutritionalRecord(foodId) {
  return await httpClient.delete(`admin/nutritionalrecord/${foodId}`);
}

export async function editNutritionalRecord(foodId, data) {
  return await httpClient.patch(`admin/nutritionalrecord/${foodId}`, data);
}
