/**
 * reducer 格式参考
 */
export default (state: object = {}, action: {type?: string, loginState?: boolean} = {}) => {
  const {type, loginState}: {type?: string, loginState?: boolean} = action;
  switch (type) {
    case 'test':
      return {
        type,
        loginState
      }
    default:
      return state;
  }
}
