function Toast() {
  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: "11" }}>
      <div className="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true" id="liveToast">
        <div className="d-flex">
          <div className="toast-body">Toast message.</div>
          <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    </div>
  );
}

export default Toast;
