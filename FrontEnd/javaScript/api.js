const BASE_URL = 'http://127.0.0.1:5000/';
const RESOURSE_URL = `${BASE_URL}/stadium`;

const baseRequest = async ({urlPath = "", method = 'Get', body = null}) => { //post and put
    try {
        const reqParams = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body)
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);

    } catch (error) {

    }
}

export const getAllStadiums = async () => {
    const rawResponse = await baseRequest({ method: 'GET'});

    return rawResponse.json();
}

export const postStadium = async (body) => baseRequest({method: 'POST', body});

export const editStadium = async (id, body) => baseRequest({urlPath: `/${id}`, method: "PUT", body})

export const deleteStadium = async (id) => baseRequest({urlPath: `/${id}`, method: "DELETE"}); // Якщо видаляти за id
