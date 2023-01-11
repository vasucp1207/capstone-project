import React, { useContext } from "react";
import { getClass } from "../utils/getClass";
import Image from "../components/Image";
import { Context } from "../context";

function Photos() {
  const { allPhotos } = useContext(Context);

  const imageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));

  return <main className="photos">{imageElements}</main>;
}

export default Photos;
