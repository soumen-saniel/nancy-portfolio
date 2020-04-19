import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script key={0} src='https://identity.netlify.com/v1/netlify-identity-widget.js' type='text/javascript'></script>,
    <script key={1} src='./cmsLoginRedirect.js' type='text/javascript'></script>
  ])
}
