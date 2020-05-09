import React from "react";

export default function AchivementCard({ cardInfo }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (

      <div className="certificate-card">
        <div className="certificate-detail-div">
          <h5 className="card-title">{cardInfo.title}</h5>
          <p className="card-subtitle">{cardInfo.description} </p>
          <p className="card-subtitle">{cardInfo.techstack}</p>
        </div>
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, i) => {
            return <p onClick={() => openUrlInNewTab(v.url)}>{v.name}</p>;
          })}
        </div>
      </div>
  );
}
