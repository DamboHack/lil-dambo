import React from "react";
import { useSelector } from "react-redux";
const ClaimedNFT = ({ meta }) => {
  const address = useSelector((x) => x.auth.accountAddress);
  console.log("meta", meta);
  return (
    <div
      style={{
        width: "100%",
        marginTop: 40,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <div>
        <div style={{ fontSize: 40, fontFamily: "bolder" }}>{`${address?.slice(
          0,
          4
        )}...${address?.slice(-4)}`}</div>
        <div
          style={{
            fontSize: 40,
            fontFamily: "bolder",
            color: "#808080",
            marginBottom: "1rem",
          }}
        >
          damboDao Member
        </div>
        {/* <div
          style={{
            fontSize: 16,
            fontFamily: "bolder",
            color: "#808080",
          }}
        >
          17th on leaderboard
        </div> */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            onClick={() =>
              window.open(
                `https://testnets.opensea.io/assets/mumbai/0x78cc9e95447eabd06786abfa48ff36b77149e7e5/${3}`
              )
            }
            style={{
              textDecoration: "underline",
              fontSize: "1rem",
              marginTop: "2.5rem",
            }}
          >
            view on opensea
          </div>
        </div>
      </div>
      <img
        src={
          meta ||
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQwXzUwKSI+PHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSIyNDAiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE2MC44MjggMjMxLjYzNEwxNTkuNjg1IDIxMi41NzhDMTU5LjU4NCAyMTAuODkyIDE2MC44OTQgMjA5LjQ1NSAxNjIuNTgyIDIwOS40TDIxOC4xODYgMjA3LjU5MkMyMTkuNzY4IDIwNy41NCAyMjEuMTE4IDIwOC43MjcgMjIxLjI3IDIxMC4zMDNMMjIzLjE4OSAyMzAuMjY1QzIyMy4zNTcgMjMyLjAwOCAyMjIuMDAyIDIzMy41MjQgMjIwLjI1MSAyMzMuNTUyTDE2My44NzEgMjM0LjQ1NEMxNjIuMjY1IDIzNC40OCAxNjAuOTI0IDIzMy4yMzcgMTYwLjgyOCAyMzEuNjM0WiIgZmlsbD0iI0VDREFDMCIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlIiBmb250LWZhbWlseT0iSW50ZXIiIGZvbnQtc2l6ZT0iNTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBsZXR0ZXItc3BhY2luZz0iLTAuMDVlbSI+PHRzcGFuIHg9IjEwIiB5PSI1OC4zNjM2Ij5EYW1ibzwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwMCA2Nikgcm90YXRlKC05MCkiIGZpbGw9ImJsYWNrIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZSIgZm9udC1mYW1pbHk9IkludGVyIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgbGV0dGVyLXNwYWNpbmc9IjBlbSI+PHRzcGFuIHg9IjAiIHk9IjE3LjgxODIiPnhwOiAxMDwvdHNwYW4+PC90ZXh0PjxjaXJjbGUgb3BhY2l0eT0iMC4yIiBjeD0iMjMxIiBjeT0iMjM3IiByPSIzNi41IiBmaWxsPSIjMUJBNjcyIiBzdHJva2U9IiMxQkE2NzIiIHN0cm9rZS13aWR0aD0iMTEiLz48Y2lyY2xlIGN4PSIyMzEiIGN5PSIyMzciIHI9IjE2LjUiIGZpbGw9IiMxQkE2NzIiIHN0cm9rZT0iIzFCQTY3MiIgc3Ryb2tlLXdpZHRoPSIxMSIvPjxwYXRoIGQ9Ik0yMzEuNSAyMzYuNUwyMjkuMTMzIDIwMi40MTVDMjI5LjA1OSAyMDEuMzQ1IDIyOC4xNTQgMjAwLjUyNCAyMjcuMDgxIDIwMC41NTRMMTU5Ljk2NSAyMDIuNDQ1QzE1OC44NzQgMjAyLjQ3NSAxNTcuOTYgMjAxLjYyNiAxNTcuOTExIDIwMC41MzZMMTU2LjU4MiAxNzEuMjk0QzE1Ni41MzUgMTcwLjI3NCAxNTUuNzI3IDE2OS40NTIgMTU0LjcwNyAxNjkuMzg5TDEwOS44NzcgMTY2LjYxNkMxMDguODIyIDE2Ni41NTEgMTA4IDE2NS42NzcgMTA4IDE2NC42MlYxMjkuNjI4QzEwOCAxMjguNDc1IDEwNy4wMjcgMTI3LjU2IDEwNS44NzYgMTI3LjYzMkw1MS41IDEzMUgyMy4zNjIyQzIyLjMxMyAxMzEgMjEuNDQyMSAxMzAuMTg5IDIxLjM2NzMgMTI5LjE0MkwxNy41IDc1IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTE2NS4zMjggMTkxLjEzNEwxNjQuMTg1IDE3Mi4wNzhDMTY0LjA4NCAxNzAuMzkyIDE2NS4zOTQgMTY4Ljk1NSAxNjcuMDgyIDE2OC45TDIyMi42ODYgMTY3LjA5MkMyMjQuMjY4IDE2Ny4wNCAyMjUuNjE4IDE2OC4yMjcgMjI1Ljc3IDE2OS44MDNMMjI3LjY4OSAxODkuNzY1QzIyNy44NTcgMTkxLjUwOCAyMjYuNTAyIDE5My4wMjQgMjI0Ljc1MSAxOTMuMDUyTDE2OC4zNzEgMTkzLjk1NEMxNjYuNzY1IDE5My45OCAxNjUuNDI0IDE5Mi43MzcgMTY1LjMyOCAxOTEuMTM0WiIgZmlsbD0iI0VDREFDMCIvPjxwYXRoIGQ9Ik0yOC4zMjgxIDIzMi4xMzZMMjcuMTkwOCAyMTMuMThDMjcuMDg3MyAyMTEuNDU1IDI4LjQ1NzkgMjEwIDMwLjE4NTQgMjEwSDkwQzkxLjY1NjkgMjEwIDkzIDIxMS4zNDMgOTMgMjEzVjIzMS4wNDZDOTMgMjMyLjY4NSA5MS42ODUgMjM0LjAyIDkwLjA0NjUgMjM0LjA0NkwzMS4zNjkzIDIzNC45NTZDMjkuNzY0NCAyMzQuOTggMjguNDI0MyAyMzMuNzM4IDI4LjMyODEgMjMyLjEzNloiIGZpbGw9IiNENUQ1RDUiLz48cGF0aCBkPSJNMjkuMjY0MyAxMTkuMTA0TDI2LjI3NiA4Mi4zOTA0QzI2LjEyOTUgODAuNTkwNyAyNy41OTQ0IDc5LjA3MDMgMjkuMzk4MyA3OS4xNDk5TDU3LjEzMjIgODAuMzczNUM1OC43MzYxIDgwLjQ0NDIgNjAgODEuNzY1MSA2MCA4My4zNzA2VjExNy42NDRDNjAgMTE5LjI0MyA1OC43NDUgMTIwLjU2MiA1Ny4xNDc0IDEyMC42NEwzMi40MDE4IDEyMS44NTdDMzAuNzg0MyAxMjEuOTM3IDI5LjM5NTcgMTIwLjcxOCAyOS4yNjQzIDExOS4xMDRaIiBmaWxsPSIjRUNEQUMwIi8+PHBhdGggZD0iTTY3LjUgMTE4Ljc0VjgxLjg3ODNDNjcuNSA4MC4wODA5IDY5LjA2OTggNzguNjg2OSA3MC44NTQ2IDc4Ljg5OTRMMTA2Ljg1NSA4My4xODUxQzEwOC4zNjQgODMuMzY0NyAxMDkuNSA4NC42NDQ0IDEwOS41IDg2LjE2NFYxMTUuNzRDMTA5LjUgMTE3LjMgMTA4LjMwNCAxMTguNiAxMDYuNzQ5IDExOC43MjlMNzAuNzQ5MSAxMjEuNzI5QzY5LjAwMDEgMTIxLjg3NSA2Ny41IDEyMC40OTUgNjcuNSAxMTguNzRaIiBmaWxsPSIjRDVENUQ1Ii8+PHBhdGggZD0iTTI4LjMyODEgMjAyLjEzNkwyNy4xOTA4IDE4My4xOEMyNy4wODczIDE4MS40NTUgMjguNDU3OSAxODAgMzAuMTg1NCAxODBIOTBDOTEuNjU2OSAxODAgOTMgMTgxLjM0MyA5MyAxODNWMjAxLjA0NkM5MyAyMDIuNjg1IDkxLjY4NSAyMDQuMDIgOTAuMDQ2NSAyMDQuMDQ2TDMxLjM2OTMgMjA0Ljk1NkMyOS43NjQ0IDIwNC45OCAyOC40MjQzIDIwMy43MzggMjguMzI4MSAyMDIuMTM2WiIgZmlsbD0iI0VDREFDMCIvPjxwYXRoIGQ9Ik0xMTUgMTU3LjEzOVYxMzBDMTE1IDEyOC4zNDMgMTE2LjM0MyAxMjcgMTE4IDEyN0gyMTguODgxQzIyMC4zODIgMTI3IDIyMS42NTEgMTI4LjEwOCAyMjEuODU0IDEyOS41OTVMMjI1LjU1NSAxNTYuNzM4QzIyNS43OTQgMTU4LjQ4OCAyMjQuNDc2IDE2MC4wNjUgMjIyLjcxMSAxNjAuMTQxTDE2Ny41IDE2Mi41TDExNy44NTcgMTYwLjEzNkMxMTYuMjU4IDE2MC4wNiAxMTUgMTU4Ljc0MSAxMTUgMTU3LjEzOVoiIGZpbGw9IiNFQ0RBQzAiLz48cGF0aCBkPSJNNC41IDE2OC41VjE0MS45MDhDNC41IDE0MC4yODcgNS43ODY3MSAxMzguOTYgNy40MDYzIDEzOC45MDlMOTcuMTg2OCAxMzYuMTA0Qzk4Ljk2MDcgMTM2LjA0OCAxMDAuMzk1IDEzNy41MzYgMTAwLjI3MyAxMzkuMzA3TDk4LjE5NDggMTY5LjY1NkM5OC4wODU2IDE3MS4yNSA5Ni43NDY4IDE3Mi40NzggOTUuMTQ5NyAxNzIuNDVMNDAuNSAxNzEuNUg3LjVDNS44NDMxNSAxNzEuNSA0LjUgMTcwLjE1NyA0LjUgMTY4LjVaIiBmaWxsPSIjQ0VFQ0MwIi8+PHBhdGggZD0iTTE0OS4zMTUgMjM1SDEzMC42MjdDMTI4LjkyMSAyMzUgMTI3LjU1OSAyMzMuNTggMTI3LjYyOSAyMzEuODc2TDEyOS44NjggMTc3LjY5NEMxMjkuOTQgMTc1Ljk2NCAxMzEuNDU3IDE3NC42NTMgMTMzLjE3OSAxNzQuODM1TDE0Ni40NzEgMTc2LjIzNEMxNDcuOTMgMTc2LjM4NyAxNDkuMDY0IDE3Ny41NzQgMTQ5LjE1MiAxNzkuMDM4TDE1Mi4zMSAyMzEuODIxQzE1Mi40MTMgMjMzLjU0NSAxNTEuMDQyIDIzNSAxNDkuMzE1IDIzNVoiIGZpbGw9IiNFQ0RBQzAiLz48cGF0aCBkPSJNMTM3LjE4NCAxMjMuNUgxMTguMTkxQzExNi40NjEgMTIzLjUgMTE1LjA5IDEyMi4wNDEgMTE1LjE5NyAxMjAuMzE1TDExNy4zMTkgODUuOTMwMUMxMTcuNDIgODQuMzAxNyAxMTguODAzIDgzLjA1MjEgMTIwLjQzMyA4My4xMTczTDEzOS40MzIgODMuODc3M0MxNDEuMTE1IDgzLjk0NDYgMTQyLjQxMiA4NS4zODM2IDE0Mi4zMDYgODcuMDY0NEwxNDAuMTc4IDEyMC42ODlDMTQwLjA3OCAxMjIuMjcgMTM4Ljc2NyAxMjMuNSAxMzcuMTg0IDEyMy41WiIgZmlsbD0iI0VDREFDMCIvPjxwYXRoIGQ9Ik0yMTYuMTg0IDEyMy41SDE0Ny4xOTFDMTQ1LjQ2MSAxMjMuNSAxNDQuMDkgMTIyLjA0MSAxNDQuMTk3IDEyMC4zMTVMMTQ2LjMyNCA4NS44NTNDMTQ2LjQyMiA4NC4yNTU1IDE0Ny43NTggODMuMDE2OCAxNDkuMzU4IDgzLjAzODFMMjE4LjM0NyA4My45NThDMjIwLjA2MiA4My45ODA4IDIyMS40MDkgODUuNDM1IDIyMS4zMDEgODcuMTQ3MkwyMTkuMTc4IDEyMC42ODlDMjE5LjA3OCAxMjIuMjcgMjE3Ljc2NyAxMjMuNSAyMTYuMTg0IDEyMy41WiIgZmlsbD0iI0VDREFDMCIvPjxwYXRoIGQ9Ik0yMS44MTUxIDIzNUgzQzEuMzQzMTUgMjM1IDAgMjMzLjY1NyAwIDIzMlYxNzkuNUMwIDE3Ny44NDMgMS4zNDMxNSAxNzYuNSAzIDE3Ni41SDE4LjY3NDFDMjAuMjYxNCAxNzYuNSAyMS41NzQgMTc3LjczNiAyMS42Njg4IDE3OS4zMjFMMjQuODA5OCAyMzEuODIxQzI0LjkxMyAyMzMuNTQ1IDIzLjU0MjUgMjM1IDIxLjgxNTEgMjM1WiIgZmlsbD0iI0VDREFDMCIvPjxwYXRoIGQ9Ik05LjgxNTE1IDEzNS41SC05Qy0xMC42NTY5IDEzNS41IC0xMiAxMzQuMTU3IC0xMiAxMzIuNVY4MEMtMTIgNzguMzQzMSAtMTAuNjU2OSA3NyAtOSA3N0g2LjY3NDEyQzguMjYxMzkgNzcgOS41NzM5NyA3OC4yMzY0IDkuNjY4NzcgNzkuODIwOEwxMi44MDk4IDEzMi4zMjFDMTIuOTEzIDEzNC4wNDUgMTEuNTQyNSAxMzUuNSA5LjgxNTE1IDEzNS41WiIgZmlsbD0iI0VDREFDMCIvPjxwYXRoIGQ9Ik0xMjAuMDk4IDIzNUgxMDEuMTI3Qzk5LjQyMTEgMjM1IDk4LjA1ODcgMjMzLjU4IDk4LjEyOTEgMjMxLjg3NkwxMDAuMzgxIDE3Ny4zNzZDMTAwLjQ0OCAxNzUuNzY5IDEwMS43NyAxNzQuNSAxMDMuMzc5IDE3NC41SDEyMS44OTlDMTIzLjU5NSAxNzQuNSAxMjQuOTU0IDE3NS45MDQgMTI0Ljg5OCAxNzcuNTk5TDEyMy4wOTYgMjMyLjA5OUMxMjMuMDQyIDIzMy43MTcgMTIxLjcxNiAyMzUgMTIwLjA5OCAyMzVaIiBmaWxsPSIjRUNEQUMwIi8+PGNpcmNsZSBjeD0iMjMxLjUiIGN5PSIyMzYuNSIgcj0iMy41IiBmaWxsPSJ3aGl0ZSIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQwXzUwIj48cmVjdCB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgZmlsbD0id2hpdGUiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4="
        }
        style={{
          border: "1px solid #808080",
          height: "194px",
          width: "194px",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

export default ClaimedNFT;
