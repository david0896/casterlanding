import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M488 164h-32c-2.804 0-5.496.488-8 1.377V132c0-13.232-10.768-24-24-24h-32c-13.232 0-24 10.768-24 24v80H144v-80c0-13.232-10.768-24-24-24H88c-13.232 0-24 10.768-24 24v33.377A23.89 23.89 0 0 0 56 164H24c-13.232 0-24 10.768-24 24v136c0 13.232 10.768 24 24 24h32c2.804 0 5.496-.488 8-1.377V380c0 13.232 10.768 24 24 24h32c13.232 0 24-10.768 24-24v-80h224v80c0 13.232 10.768 24 24 24h32c13.232 0 24-10.768 24-24v-33.377a23.89 23.89 0 0 0 8 1.377h32c13.232 0 24-10.768 24-24V188c0-13.232-10.768-24-24-24zM56 332H24c-4.408 0-8-3.592-8-8V188c0-4.408 3.592-8 8-8h32c4.408 0 8 3.592 8 8v136c0 4.408-3.592 8-8 8zm72 48c0 4.408-3.592 8-8 8H88c-4.408 0-8-3.592-8-8V132c0-4.408 3.592-8 8-8h32c4.408 0 8 3.592 8 8v248zm16-96v-56h224v56H144zm288 96c0 4.408-3.592 8-8 8h-32c-4.408 0-8-3.592-8-8V132c0-4.408 3.592-8 8-8h32c4.408 0 8 3.592 8 8v248zm64-56c0 4.408-3.592 8-8 8h-32c-4.408 0-8-3.592-8-8V188c0-4.408 3.592-8 8-8h32c4.408 0 8 3.592 8 8v136z"
      style={{
        fill: "#FFD700",
      }}
    />
    <path
      d="M250.32 262.32c-1.44 1.52-2.32 3.6-2.32 5.68 0 2.08.88 4.16 2.32 5.68 1.52 1.44 3.6 2.32 5.68 2.32s4.16-.88 5.68-2.32c1.44-1.52 2.32-3.6 2.32-5.68 0-2.08-.88-4.16-2.32-5.68-2.96-2.96-8.4-2.96-11.36 0zM277.68 238.32c-3.04-2.96-8.32-2.96-11.36 0-1.44 1.52-2.32 3.6-2.32 5.68s.88 4.16 2.32 5.68c1.52 1.44 3.6 2.32 5.68 2.32 2.08 0 4.16-.88 5.68-2.32 1.44-1.52 2.32-3.6 2.32-5.68s-.88-4.16-2.32-5.68zM245.68 238.32c-3.04-2.96-8.32-2.96-11.36 0-1.44 1.52-2.32 3.6-2.32 5.68s.88 4.16 2.32 5.68c1.52 1.44 3.6 2.32 5.68 2.32s4.16-.88 5.68-2.32c1.44-1.52 2.32-3.6 2.32-5.68s-.88-4.16-2.32-5.68zM213.68 238.32c-3.04-2.96-8.32-2.96-11.36 0-1.44 1.52-2.32 3.6-2.32 5.68s.88 4.16 2.32 5.68c1.52 1.44 3.6 2.32 5.68 2.32s4.16-.88 5.68-2.32c1.44-1.52 2.32-3.6 2.32-5.68s-.88-4.16-2.32-5.68zM181.68 238.32c-3.04-2.96-8.32-2.96-11.36 0-1.44 1.52-2.32 3.6-2.32 5.68s.88 4.16 2.32 5.68c1.52 1.44 3.6 2.32 5.68 2.32s4.16-.88 5.68-2.32c1.44-1.52 2.32-3.6 2.32-5.68s-.88-4.16-2.32-5.68zM341.68 238.32c-3.04-2.96-8.32-2.96-11.36 0-1.44 1.52-2.32 3.6-2.32 5.68s.88 4.16 2.32 5.68c1.52 1.44 3.6 2.32 5.68 2.32 2.08 0 4.16-.88 5.68-2.32 1.44-1.52 2.32-3.6 2.32-5.68s-.88-4.16-2.32-5.68zM309.68 238.32c-3.04-2.96-8.32-2.96-11.36 0-1.44 1.52-2.32 3.6-2.32 5.68s.88 4.16 2.32 5.68c1.52 1.44 3.6 2.32 5.68 2.32 2.08 0 4.16-.88 5.68-2.32 1.44-1.52 2.32-3.6 2.32-5.68s-.88-4.16-2.32-5.68zM218.32 262.32c-1.44 1.52-2.32 3.6-2.32 5.68 0 2.08.88 4.16 2.32 5.68 1.52 1.44 3.6 2.32 5.68 2.32s4.16-.88 5.68-2.32c1.44-1.52 2.32-3.6 2.32-5.68 0-2.08-.88-4.16-2.32-5.68-2.96-2.96-8.4-2.96-11.36 0zM186.32 262.32c-1.44 1.52-2.32 3.6-2.32 5.68 0 2.08.88 4.16 2.32 5.68 1.52 1.44 3.6 2.32 5.68 2.32s4.16-.88 5.68-2.32c1.44-1.52 2.32-3.6 2.32-5.68 0-2.08-.88-4.16-2.32-5.68-2.96-2.96-8.4-2.96-11.36 0zM282.32 262.32c-1.44 1.52-2.32 3.6-2.32 5.68 0 2.08.88 4.16 2.32 5.68 1.52 1.44 3.6 2.32 5.68 2.32 2.08 0 4.16-.88 5.68-2.32 1.44-1.52 2.32-3.6 2.32-5.68 0-2.08-.88-4.16-2.32-5.68-3.04-2.96-8.4-2.96-11.36 0zM314.32 262.32c-1.44 1.52-2.32 3.6-2.32 5.68 0 2.08.88 4.16 2.32 5.68 1.52 1.44 3.6 2.32 5.68 2.32 2.08 0 4.16-.88 5.68-2.32 1.44-1.52 2.32-3.6 2.32-5.68 0-2.08-.88-4.16-2.32-5.68-2.96-2.96-8.4-2.96-11.36 0zM346.32 262.32c-1.44 1.52-2.32 3.6-2.32 5.68 0 2.08.88 4.16 2.32 5.68 1.52 1.44 3.6 2.32 5.68 2.32 2.08 0 4.16-.88 5.68-2.32 1.44-1.52 2.32-3.6 2.32-5.68 0-2.08-.88-4.16-2.32-5.68-2.96-2.96-8.4-2.96-11.36 0zM154.32 262.32c-1.44 1.52-2.32 3.6-2.32 5.68 0 2.08.88 4.16 2.32 5.68 1.52 1.44 3.6 2.32 5.68 2.32s4.16-.88 5.68-2.32c1.44-1.52 2.32-3.6 2.32-5.68 0-2.08-.88-4.16-2.32-5.68-2.96-2.96-8.32-2.96-11.36 0z"
      style={{
        fill: "#FFD700",
      }}
    />
  </svg>
)
export default SvgComponent