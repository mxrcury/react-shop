import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <>
  <ContentLoader 
    speed={2}
    width={280}
    height={436}
    viewBox="0 0 280 436"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="26" y="96" rx="6" ry="6" width="144" height="126" /> 
    <rect x="0" y="266" rx="6" ry="6" width="208" height="83" /> 
    <rect x="2" y="358" rx="0" ry="0" width="98" height="20" /> 
    <rect x="117" y="355" rx="10" ry="10" width="91" height="32" />
  </ContentLoader>
  </>
)

export default Loader