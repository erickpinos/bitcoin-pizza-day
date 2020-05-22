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

export async function queryTokenByID() {
  const scriptHash = '1da6f6ffd2811a73eed8acb624210d2a4682d6d1';
  const operation = 'queryTokenByID';

//  const p1 = new Parameter('tokenID', ParameterType.ByteArray, 'd428ca95eab3b24555b60457b65cd83f24df3d80f3f23104f9eea22eaa1343cf');

//  const parametersRaw = [p1];

//  const args = parametersRaw.map((raw) => ({ type: raw.type, value: convertValue(raw.value, raw.type) }));

  const args = [
    { type: 'ByteArray', value: 'd428ca95eab3b24555b60457b65cd83f24df3d80f3f23104f9eea22eaa1343cf' }
  ]

  try {
    const result = await client.api.smartContract.invokeRead({ scriptHash, operation, args });
    console.log('onScCallRead finished, result:' + result);
    return result;
  } catch (e) {
    alert('onScCallRead canceled');
    console.log('onScCallRead error:', e);
  }
}
