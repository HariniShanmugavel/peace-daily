export async function submitCheckin(data: {
  stress: number;
  energy: number;
  anxiety: number;
  focus: number;
}) {
  const res = await fetch("http://127.0.0.1:8000/checkin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}
