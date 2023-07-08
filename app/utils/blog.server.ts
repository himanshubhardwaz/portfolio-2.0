export const fetchBlog = async (blogname: string) => {
  const url = `https://api.github.com/repos/himanshubhardwaz/blogs/contents/${blogname}.md`;
  const headers = new Headers();
  const userAgent = navigator.userAgent;
  headers.append("User-Agent", userAgent);
  return fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => {
      // @ts-ignore
      const content = atob(data.content);
      console.log(content);
      return content;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
