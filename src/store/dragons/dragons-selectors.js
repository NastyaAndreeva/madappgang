const getLoading = state => state.dragons.loading;

const getAllDragons = state => state.dragons.dragons;

const dragonsSelectors = {
  getLoading,
  getAllDragons,
};
export default dragonsSelectors;
