export const UserUpdate = async (req, res, next) => {
  try {
    // Logic here

    const { fullName, email, mobileNumber } = req.body;
    const currentUser = req.user;

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);
    }

    console.log("OldData", currentUser); // old user data in json format
    // first way
    //     currentUser.fullName=fullName;
    //     currentUser.email=email;
    //     currentUser.mobileNumber=mobileNumber;
    //     await currentUser.save();

    // console.log("NewData",currentUser);

    // second way
    const updatedUser = await User.findByIdAndUpdate(
      { _id: currentUser._id },
      { fullName, email, mobileNumber },
      { new: true },
    );

    // res.
    // .status(200)
    // .json({ message: "Profile Updated Successfully", data: updatedUser });

    console.log("Updated User Data:", updatedUser);
  } catch (error) {
    next(error);
  }
};
