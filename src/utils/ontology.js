import { client } from 'ontology-dapi';
import { hexstr2str } from './utils';

client.registerClient({});

export async function smartContractRead(operation) {
  const scriptHash = '1da6f6ffd2811a73eed8acb624210d2a4682d6d1';

  try {
    const result = await client.api.smartContract.invokeRead({ scriptHash, operation });
    console.log('onScCallRead finished, result:' + hexstr2str(result));
    return hexstr2str(result);
  } catch (e) {
    alert('onScCallRead canceled');
    console.log('onScCallRead error:', e);
  }
}

export async function getTotalSupply() {
  const scriptHash = '1da6f6ffd2811a73eed8acb624210d2a4682d6d1';
  const operation = 'totalSupply';

  try {
    const result = await client.api.smartContract.invokeRead({ scriptHash, operation });
    console.log('onScCallRead finished, result:' + result);
    return result;
  } catch (e) {
    alert('onScCallRead canceled');
    console.log('onScCallRead error:', e);
  }
}

export async function queryTokenByID(id) {
  const scriptHash = '1da6f6ffd2811a73eed8acb624210d2a4682d6d1';
  const operation = 'queryTokenByID';

  const args = [
    { type: 'ByteArray', value: id }
  ]

  try {
    const result = await client.api.smartContract.invokeRead({ scriptHash, operation, args });
//    console.log('onScCallRead finished, result:' + result);
    return result;
  } catch (e) {
    alert('onScCallRead canceled');
    console.log('onScCallRead error:', e);
  }
}

export async function queryTokenIDByIndex(index) {
  const scriptHash = '1da6f6ffd2811a73eed8acb624210d2a4682d6d1';
  const operation = 'queryTokenIDByIndex';

  const args = [
    { type: 'ByteArray', value: index }
  ]

  try {
    const result = await client.api.smartContract.invokeRead({ scriptHash, operation, args });
//    console.log('onScCallRead finished, result:' + result);
    return result;
  } catch (e) {
    alert('onScCallRead canceled');
    console.log('onScCallRead error:', e);
  }
}
