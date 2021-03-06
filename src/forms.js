export default http => ({
  list: args => getForms(http, args),
  get: args => getForm(http, args),
  update: args => updateForm(http, args),
  delete: args => deleteForm(http, args),
  create: args => createForm(http, args),
  messages: {
    get: args => getMessages(http, args),
    update: args => updateMessages(http, args)
  }
})

const getForms = (http, { page, pageSize, search, workspaceId } = {}) => {
  return http.request({
    method: 'get',
    url: `/forms`,
    params: {
      page,
      page_size: pageSize,
      search,
      workspace_id: workspaceId
    }
  })
}

const getForm = (http, { uid }) => {
  return http.request({
    method: 'get',
    url: `/forms/${uid}`
  })
}

const updateForm = (http, { uid, override, data } = {}) => {
  let methodType = 'patch'
  if (override) {
    methodType = 'put'
  }

  return http.request({
    method: methodType,
    url: `/forms/${uid}`,
    data
  })
}

const createForm = (http, { data } = {}) => {
  return http.request({
    method: 'post',
    url: `/forms`,
    data
  })
}

const deleteForm = (http, { uid }) => {
  return http.request({
    method: 'delete',
    url: `/forms/${uid}`
  })
}

const getMessages = (http, { uid }) => {
  return http.request({
    method: 'get',
    url: `/forms/${uid}/messages`
  })
}

const updateMessages = (http, { uid, data }) => {
  return http.request({
    method: 'put',
    url: `/forms/${uid}/messages`,
    data
  })
}
