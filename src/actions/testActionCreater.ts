/**
 * actionCreater 格式参考
 */
export default (params: object = {}) => (
  dispatch: (arg: object) => void,
  getState: () => object
) => {
  dispatch(params);
};
