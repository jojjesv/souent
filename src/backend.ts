/**
 * Standard backend communication functions.
 * @author Johan Svensson
 */
;

//@ts-ignore
//import fetch from 'whatwg-fetch';

let baseUrl = `http://localhost:8004/api`;

/**
 * Performs a standard backend request.
 * Expects the result as JSON!
 */
export async function request(path: string, method: 'get'|'post'|'put'|'delete' = 'get', body: any = null, query: string = null) {
  path = path || "";
  query = query || "";

  if (!path.startsWith("/")) {
    path = `/${path}`;
  }

  if (!query.startsWith("?")) {
    query = `?${query}`;
  }

  if (body && typeof body == "object") {
    body = JSON.stringify(body);
  }
  
  if (method == "get") {
    body = undefined;
  }

  let url = `${baseUrl}${path}${query}`;
  let result = await fetch(url, {
    method,
    headers: {
      "Authorization": "Bearer 113034202958467266988",
      "Content-Type": "application/json"
    },
    body
  });

  return result.json();
}