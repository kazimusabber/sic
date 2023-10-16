import Image from "next/image";

const FeedBackSlider = ({icon, content, user}) => {
  return (
    <div className="feedback-slider-item">
      <div className="icon">
        <Image
          src={icon}
          alt="icon"
          height={45}
          width={70}
        />
      </div>
      <div className="content">
        <h3>{content}</h3>
      </div>
      <div className="review">
        <div className="profile">
          <div className="logo">
            <Image
              src={user?.img}
              alt="user"
              height={86}
              width={86}
            />
          </div>
          <div className="info">
            <h5>{user?.name}</h5>
            <span>at</span>
            <h6>{user?.address}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackSlider;
