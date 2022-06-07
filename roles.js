const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {
    ac.grant("submitter")
     .readAny("profile")
     .updateOwn("profile")

     ac.grant("developer")
     .extend("submitter")

    ac.grant("project_manager")
     .extend("submitter")
         
    ac.grant("admin")
     .extend("submitter")
     .updateAny("profile")
     .deleteAny("profile")
     
    return ac;
    })();