export const copyToClipboard = async (text: string) => {
  try {
    if ((navigator as any).clipboard) {
      try {
        // Chrome
        const { state } = await navigator.permissions.query({
          // @ts-ignore
          name: "clipboard-write",
        });
        if (state == "granted" || state == "prompt") {
          /* write to the clipboard now */
          (navigator as any).clipboard.writeText(text);
        }
      } catch (err) {
        // Probably Firefox, just try to write
        (navigator as any).clipboard.writeText(text);
      }
    } else if ((window as any).clipboardData) {
      // IE
      (window as any).clipboardData.setData("text", text);
    } else {
      // other browsers, iOS, Mac OS
      const el = document.createElement("textarea"); // Create a <textarea> element
      el.value = text; // Set its value to the string that you want copied
      el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
      el.style.position = "absolute";
      el.style.left = "-9999px"; // Move outside the screen to make it invisible
      document.body.appendChild(el); // Append the <textarea> element to the HTML document
      const selected =
        (document.getSelection()?.rangeCount || 0) > 0 // Check if there is any content selected previously
          ? document.getSelection()?.getRangeAt(0) // Store selection if found
          : false; // Mark as false to know no selection existed before
      el.select(); // Select the <textarea> content
      document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
      document.body.removeChild(el); // Remove the <textarea> element
      if (selected) {
        // If a selection existed before copying
        document.getSelection()?.removeAllRanges(); // Unselect everything on the HTML document
        document.getSelection()?.addRange(selected); // Restore the original selection
      }
      console.log("Copied to Clipboard.");
      return true;
    }
  } catch (e) {
    console.log("Copy to Clipboard failed.");
    return false;
  }
};
