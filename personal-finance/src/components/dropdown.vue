<script setup>
import { ref, onBeforeUnmount } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  selectHoverColor: {
    type: String,
    required: false,
    default: 'white',
  },
  selectBorder: {
    type: String,
    required: false,
    default: '1px solid #696868',
  },
  selectBorderRadius: {
    type: String,
    required: false,
    default: '0.4rem',
  },
  selectFontSize: {
    type: String,
    required: false,
    default: '1.2rem'
  },
  selectFocusBorder: {
    type: String,
    required: false,
    default: '1px solid black'
  },
  selectBgColor: {
    type: String,
    required: false,
    default: 'white',
  },
  selectHeight: {
    type: String,
    required: false,
    default: '45px',
  },
  selectWidth: {
    type: String,
    required: false,
    default: '22rem',
  },
  selectPaddingX: {
    type: String,
    required: false,
    default: '0.8rem'
  },
  selectPaddingY: {
    type: String,
    required: false,
    default: '0rem',
  },
  optionsGap: {
    type: String,
    required: false,
    default: '4rem',
  },
  optionItemPaddingX: {
    type: String,
    required: false,
    default: '0.8rem',
  },
  optionItemPaddingY: {
    type: String,
    required: false,
    default: '0.8rem',
  },
  optionItemHoverColor: {
    type: String,
    required: false,
    default: 'green',
  },
  optionItemBgColor: {
    type: String,
    required: false,
    default: 'white',
  },
  optionsBorderRadius: {
    type: String,
    required: false,
    default: '0.4rem',
  },
  selectDefaultText: {
    type: String,
    required: false,
    default: ''
  },
})

const dropdownRef = ref(null);
const ariaHidden = ref(true);
const showDropdown = ref(false);
const selectedOption = ref(-1);
const isFocus = ref(false);
const isHover = ref(false);
const isItemHover = ref(Array(props.items.length).fill(false));


const toggleCustomSelect = () => {
  const isClosed = showDropdown.value === false;
  if (isClosed){openDropdown()}
  else {closeDropdown()}
}

const openDropdown  = () => {
  showDropdown.value = true;
  ariaHidden.value = false;
  document.addEventListener("click", watchClickOutside);
  document.addEventListener("keydown", keyNavigation);
}

const closeDropdown = () => {
  showDropdown.value = false;
  ariaHidden.value = true;
  document.removeEventListener("click", watchClickOutside);
  document.removeEventListener("keydown", keyNavigation);
}

const watchClickOutside = (event) => {
  // Close only if click is outside the dropdown
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    closeDropdown();
  }
};

const keyNavigation = (e) => {
  const keyPress = e.code;
  const keyIdx = selectedOption.value;
  switch(keyPress){
    case 'ArrowUp':
      selectedOption.value = Math.max(0, (keyIdx - 1));
      break;
    case 'ArrowDown':
      selectedOption.value = Math.min(props.items.length - 1, (keyIdx + 1));
      break;
    case 'Enter':
      closeDropdown();
      break;
    case 'Escape':
      closeDropdown();
      break;
  }
}


onBeforeUnmount(()=>{
  selectedOption.value = -1;
  document.removeEventListener("click", watchClickOutside);
  document.removeEventListener("keydown", keyNavigation);
})
</script>


<template>
  <div class="select">
  <div class="selectWrapper" ref="dropdownRef">

    <!--Default-->
    <select class="selectNative"
            v-model="selectedOption"
            @focus="isFocus=true"
            @blur="isFocus=false"
            aria-labelledby="label"
            :style="{fontSize:props.selectFontSize, backgroundColor: props.selectBgColor,
            width: props.selectWidth, height: props.selectHeight, border: isFocus? props.selectFocusBorder : props.selectBorder,
            borderRadius: props.selectBorderRadius, paddingInline: props.selectPaddingX, paddingBlock: props.selectPaddingY}">
      <option value="sel" disabled="" selected="">Select role...</option>
      <option v-for="(item, idx) in props.items"
              :key="item.id" :value="idx">
        {{item}}
      </option>
    </select>

    <!--Custom-->
    <div class="selectCustom"
         :class="{isActive: showDropdown}" :aria-hidden="ariaHidden"
          @click="toggleCustomSelect">
      <div class="selectCustom-trigger"
           :style="{fontSize:props.selectFontSize, width: props.selectWidth, height: props.selectHeight,
           backgroundColor: isHover ? props.selectHoverColor: props.selectBgColor, border: isHover? props.selectFocusBorder : props.selectBorder,
           borderRadius: props.selectBorderRadius, paddingInline: props.selectPaddingX, paddingBlock: props.selectPaddingY}"
            @mouseenter="isHover=true"
            @mouseleave="isHover=false">
            <span>{{selectedOption>=0 ? items[selectedOption] : props.selectDefaultText}}</span>
      </div>
      <ul class="selectCustom-options"
            :style="{top: props.optionsGap, borderRadius: props.optionsBorderRadius, overflow: 'hidden'}">
        <li class="selectCustom-option"
            :style="{paddingInline: props.optionItemPaddingX, paddingBlock: props.optionItemPaddingY,
            backgroundColor: isItemHover[idx] ? props.optionItemHoverColor : props.optionItemBgColor,
            }"
            @mouseenter="isItemHover[idx]=true"
            @mouseleave="isItemHover[idx]=false"
             @click="selectedOption=idx"
             @keyup.prevent.up="keyNavigation(e)"
             @keyup.prevent.down="keyNavigation(e)"
             @keyup.enter="keyNavigation(e)"
             @keyup.esc="keyNavigation(e)"
             v-for="(item, idx) in props.items" :key="item.id">{{item}}
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>


<style scoped>
.selectNative,
.selectCustom {
  position: relative;
}

 /*Make sure the custom select does not mess with the layout*/
.selectCustom {
  position: absolute;
  top: 0;
  left: 0;
  display: none;


}

 /*This media query detects devices where the primary*/
 /*input mechanism can hover over elements. (e.g. computers with a mouse)*/
@media (hover: hover) {
  /* Since we are using a mouse, it's safe to show the cust om select.*/
  .selectCustom {
    display: block;
  }

 /* In a computer using keyboard? Then let's hide back the custom select*/
 /* // while the native one is focused*/
  .selectNative:focus + .selectCustom {
    display: none;
  }
}
/* Add the focus states too, They matter, always! */
.selectNative:focus,
.selectCustom.isActive .selectCustom-trigger {
  outline: none;

  /*box-shadow: white 0 0 0 0.2rem, green 0 0 0 0.4rem;*/
}


/*//
// Rest of the styles to create the custom select.
// Just make sure the native and the custom have a similar "box" (the trigger).
//*/

.select {
  position: relative;
}

.selectWrapper {
  position: relative;

}

.selectNative {
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='black'><path d='M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
  //border: 2px solid green;
}

.selectCustom-trigger {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.selectCustom-trigger::after {
  content: "";
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='black'><path d='M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z'/></svg>");
  background-repeat: no-repeat;
  background-position: right;
  pointer-events: none;
}

.selectCustom-options {
  position: absolute;
  left: 0;
  width: 100%;
  border: 1px solid #6f6f6f;
  //background-color: #fff;
  box-shadow: 0 0 4px #e9e1f8;
  z-index: 1;
  padding: 0 0;
  display: none;
}

.selectCustom.isActive .selectCustom-options {
  display: block;
}

.selectCustom-option {
  position: relative;
}

.selectCustom-option:hover {
  color: white;
  cursor: default;
}

.selectCustom-option:not(:last-of-type)::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #d3d3d3;
}

.selectCustom-option.isActive::before {
  content: "✓";
  position: absolute;
  left: 0.8rem;
}
</style>