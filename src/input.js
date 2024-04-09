export default function Input({ inputValue }) {
  return (
    <div className="input">
      <input type="text" value={inputValue} disabled />
    </div>
  );
}
