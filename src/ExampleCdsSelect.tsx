import { CdsSelect } from "@cds/react/select";

export function ExampleCdsSelect() {
  return (
    <>
      <h1>This renders a select</h1>
      <CdsSelect>
        <label>Test select</label>
        <select>
          <option value="one">One</option>
          <option value="two">Two</option>
        </select>
      </CdsSelect>
    </>
  );
}
