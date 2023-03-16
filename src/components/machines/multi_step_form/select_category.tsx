import {cn} from "@/lib/utils/styles"
import {CATEGORIES, Category, Context} from "@/machines/multi_step_form/machine"

interface Props {
  // eslint-disable-next-line no-unused-vars
  selectCategory: (category: Category) => void
  context: Context
}

function SelectCateGory({selectCategory, context}: Props) {
  return (
    <div>
      <ul>
        {CATEGORIES.map((category) => (
          <li key={category}>
            <label
              htmlFor={`radio-${category}`}
              className="flex items-center gap-2"
            >
              <input
                type="radio"
                onChange={() => {
                  selectCategory(category)
                }}
                name="category"
                id={`radio-${category}`}
                checked={category === context.category}
              />
              <span
                className={cn(
                  "inline-block text-lg capitalize opacity-60 transition-all duration-300 ease-in-out -translate-x-1",
                  category === context.category && "opacity-100 translate-x-0"
                )}
              >
                {category}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SelectCateGory
