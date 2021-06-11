import React from "react";
import { Box } from "@chakra-ui/react";

const sizes = {
  xs: "640px",
  sm: "700px",
  md: "750px",
  lg: "1150px",
  huge: "1550px",
  max: "2560px"
};

/**
 * @param {React.ComponentProps<typeof Box>} props
 */
const Csection = ({ size = "md", ...props }) => (
  <Box width="100%" mx="auto"  {...props} />
);
export default Csection;
