const searchBarRedirect = (data) => {
  return {
    type:"SEARCH_REQUEST",
    payload: data
  }
}

export { searchBarRedirect }
