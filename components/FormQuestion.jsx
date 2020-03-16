import React from "react";
import TextInput from "./TextInput";

const FormQuestion = ({ questionsArray }) => {
  return (
    <div>
      {questionsArray.map(question => {
        return <TextInput label={question} />;
      })}
    </div>
  );
};

export default FormQuestion;

{
  /* <script>
	(function($){ 
		$(document).on("focus", ".styled-input input:not([type=submit]), .styled-input textarea", function(e) {
			$(e.target).parents(".styled-input").addClass("active");
		});
		$(document).on("blur", ".styled-input input:not([type=submit]), .styled-input textarea", function(e) {
			if (e.target.value.trim() == "") {
				$(e.target).parents(".styled-input").removeClass("active");	
			}
		});
	})(jQuery);
</script> */
}
