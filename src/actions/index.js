export const setJwtToken = (token = null) => {
  return {
    type: "JWT_TOKEN",
    payload: token
  }
}

export const setPdfTrigger = (pdfTrigger = null, action) => {
  return {
    type: "PDF_TRIGGER",
    payload: pdfTrigger
  }
}