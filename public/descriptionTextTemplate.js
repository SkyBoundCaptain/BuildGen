(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['descriptionText'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li><p class=\"discription-text\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"postData") || (depth0 != null ? lookupProperty(depth0,"postData") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"postData","hash":{},"data":data,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":44}}}) : helper)))
    + "</p></li>";
},"useData":true});
})();