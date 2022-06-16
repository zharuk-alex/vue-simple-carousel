const createImagesData = async (from, to, width, height, thumb_w = 100, thumb_h = 100, original_w = 900, original_h = 650) => {
  const url = "https://picsum.photos/id"

  const total = Number(to) - Number(from);
  const ids = Array.from({ length: total }, (_) => {
    let id = ++from
    return {
      src: `${url}/${id}/${width}/${height}`,
      id,
      thumb: `${url}/${id}/${thumb_w}/${thumb_h}`,
      original: `${url}/${id}/${original_w}/${original_h}`
    }
  });

  const images = await Promise.all(
    ids.map(async (image) => {
      return await fetch(image.thumb, { method: 'GET' })
        .then(res => {
          if (res.ok) {
            return image
          }
        }).catch(err => console.log('Error:', err));
    })
  ).then((images) => images.filter((img) => img != undefined))

  return images;
}

export { createImagesData }