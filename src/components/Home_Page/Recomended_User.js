import Follow from "../../assets/images/follow.jpg";
import Tick from "../../assets/images/tick.jpg";
import User from "../../assets/images/User.jpg";
import { useState } from "react";

export default function Recomended_User() {
  dummyUsers = [
    {
      id: 1,
      name: "souvik guria",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "souvik guria",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 3,
      name: "souvik guria",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];
  const [icon, seticon] = useState(Follow);

  return (
    <>
      <div class="col-6">
        <div class="row g-0">
          <h6 class="bold">Carvell Wallace</h6>
          <p class="info">
            Writer, blogger, activist. Blog: https://pluralistic.net
          </p>
        </div>
      </div>
    </>
  );
}
