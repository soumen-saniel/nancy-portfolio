import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script key={0} src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>,
    <script key={1}>
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on('init', function (user) {
          if (!user) {
            window.netlifyIdentity.on('login', function () {
              document.location.href = '/admin/'
            })
          }
        })
      }
    </script>
  ])
}
