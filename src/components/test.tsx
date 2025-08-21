import { FieldInput } from "@/field";
import { store } from "@/stores/rootStore";
import { observer } from "mobx-react"
const app = store.appStore;
const Test = observer(() => {
    return (
    <div className="flex flex-col items-center ">
          <form
            onSubmit={e => {
              e.preventDefault();
              app.addCurrentItem();
            }}
          >
            <div className="flex flex-row items-center gap-2">
              <FieldInput field={app.currentItem} />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
              <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => app.reset()}>Reset</button>
            </div>
          </form>
          <ul className="flex flex-col gap-3">
            {app.items.map((item, i) => (
              <li
                key={item + i}
                className="px-4 py-2 rounded-2xl bg-white shadow-sm border border-gray-200 
                          hover:shadow-md hover:bg-gray-50 transition-all duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        )
})

export default Test;