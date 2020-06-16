const uploadImage = () => {
  window.cloudinary.openUploadWidget(
    {
      cloudName: "teach-a-man-to-fish",
      uploadPreset: "TAMTF2020",
      sources: ["local", "google_drive", "facebook"],
      cropping: true,
      multiple: false,
      defaultSource: "local",
      styles: {
        palette: {
          window: "#F5F5F5",
          sourceBg: "#FFFFFF",
          windowBorder: "#90a0b3",
          tabIcon: "#0094c7",
          inactiveTabIcon: "#69778A",
          menuIcons: "#0094C7",
          link: "#53ad9d",
          action: "#8F5DA5",
          inProgress: "#0194c7",
          complete: "#53ad9d",
          error: "#c43737",
          textDark: "#000000",
          textLight: "#FFFFFF",
        },
      },
    },

    (error, result) => {
      if (!error && result && result.event === "success") {
        const url = result.info.url;
        return url;
        //pushes through to upload answers (props.url = url)
      }
    },
  );
};
export default uploadImage;
