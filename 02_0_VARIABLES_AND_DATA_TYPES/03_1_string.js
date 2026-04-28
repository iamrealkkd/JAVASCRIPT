"use strict";
let name = "Krishna";
console.log(name);
/*
"use strict" MODE IN JAVASCRIPT

"use strict" JavaScript ka ek special mode hai jo code ko
more strict aur safer banata hai. Yeh common mistakes ko
errors me convert kar deta hai.

--------------------------------------------

Example Code

"use strict";
let name = "Krishna";
console.log(name);

Output:
Krishna

--------------------------------------------

Line by Line Explanation

1️⃣ "use strict";

Yeh JavaScript engine ko batata hai ki code strict rules
follow karega.

Strict mode ka purpose:
• Bugs kam karna
• Unsafe coding practices ko prevent karna
• Better error detection

--------------------------------------------

2️⃣ let name = "Krishna";

Yeh variable declaration hai.

let keyword:
• variable declare karta hai
• block scoped hota hai
• modern JavaScript me recommended hai

Variable name = "Krishna"

--------------------------------------------

3️⃣ console.log(name);

Yeh console me variable ki value print karta hai.

Output:
Krishna

--------------------------------------------

STRICT MODE KA IMPORTANT RULE

Without strict mode:

name = "Krishna";

JavaScript automatically ek global variable bana deta hai.

--------------------------------------------

But WITH strict mode:

"use strict";

name = "Krishna";   // ❌ ERROR

Error:
ReferenceError: name is not defined

Reason:
Strict mode me variable declare karna mandatory hai.

--------------------------------------------

Correct way

"use strict";

let name = "Krishna";

--------------------------------------------

ADVANTAGES OF STRICT MODE

1. Prevents accidental global variables
2. Throws errors for unsafe code
3. Makes debugging easier
4. Helps write cleaner JavaScript
5. Recommended in modern development

--------------------------------------------

INTERVIEW ONE-LINE ANSWER

"use strict" enables strict mode in JavaScript,
which enforces safer coding practices and prevents
common mistakes like undeclared variables.
*/