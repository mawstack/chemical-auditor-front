export default (pdfTrigger = null, action) => {
  switch (action.type) {
    case "PDF_TRIGGER":
      return action.payload;
    default:
      return pdfTrigger;
  }
};
