const useFetch = () => {
  const raw = localStorage.getItem('dataObj')
  const data = JSON.parse(raw)
  return data
}

export default useFetch
