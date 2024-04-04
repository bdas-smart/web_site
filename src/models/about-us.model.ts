import mongoose, { Schema } from "mongoose";

const aboutUsSchema = new Schema(
  {
    section: {
      title: {
        type: String,
      },
      subTitle: {
        type: String,
      },
      image: {
        type: String,
      },
    },
    story: {
      title: {
        type: String,
      },
      subTitle: {
        type: String,
      },
      image: {
        type: String,
      },
    },
    mission: {
      title: {
        type: String,
      },
      subTitle: {
        type: String,
      },
      image: {
        type: String,
      },
    },
    vision: {
      title: {
        type: String,
      },
      subTitle: {
        type: String,
      },
      image: {
        type: String,
      },
    },
    residential: {
      title: {
        type: String,
      },
      subTitle: {
        type: String,
      },
      image: {
        type: String,
      },
    },
    commmercial: {
      title: {
        type: String,
      },
      subTitle: {
        type: String,
      },
      image: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const AboutEntity = mongoose.model("AboutUs", aboutUsSchema);
export default AboutEntity;
