import { httpClient } from '../http.client';

export async function getNutritionalRecords() {
  return await (
    await httpClient.get('admin/nutritionalrecord')
  ).data.nutritionalRecords;
}
