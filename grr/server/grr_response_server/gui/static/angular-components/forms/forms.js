goog.module('grrUi.forms.forms');
goog.module.declareLegacyNamespace();

const {Aff4AttributeFormDirective} = goog.require('grrUi.forms.aff4AttributeFormDirective');
const {AutoGeneratedAES128KeyFormDirective} = goog.require('grrUi.forms.autoGeneratedAes128KeyFormDirective');
const {BytesFormDirective} = goog.require('grrUi.forms.bytesFormDirective');
const {ClientLabelFormDirective} = goog.require('grrUi.forms.clientLabelFormDirective');
const {DatetimeFormDirective} = goog.require('grrUi.forms.datetimeFormDirective');
const {DictFormDirective} = goog.require('grrUi.forms.dictFormDirective');
const {DurationFormDirective} = goog.require('grrUi.forms.durationFormDirective');
const {ExtFlagsConditionFormDirective} = goog.require('grrUi.forms.extFlagsConditionFormDirective');
const {ExtFlagsLinuxPickerLongDirective} = goog.require('grrUi.forms.extFlagsLinuxPickerLongDirective');
const {ExtFlagsLinuxPickerShortDirective} = goog.require('grrUi.forms.extFlagsLinuxPickerShortDirective');
const {ExtFlagsOsxPickerDirective} = goog.require('grrUi.forms.extFlagsOsxPickerDirective');
const {ForemanLabelRuleFormDirective} = goog.require('grrUi.forms.foremanLabelRuleFormDirective');
const {GlobExpressionFormDirective} = goog.require('grrUi.forms.globExpressionFormDirective');
const {GlobExpressionsListFormDirective} = goog.require('grrUi.forms.globExpressionsListFormDirective');
const {OutputPluginDescriptorFormDirective} = goog.require('grrUi.forms.outputPluginDescriptorFormDirective');
const {SemanticEnumFormDirective} = goog.require('grrUi.forms.semanticEnumFormDirective');
const {SemanticPrimitiveFormDirective} = goog.require('grrUi.forms.semanticPrimitiveFormDirective');
const {SemanticProtoFormDirective} = goog.require('grrUi.forms.semanticProtoFormDirective');
const {SemanticProtoRepeatedFieldFormDirective} = goog.require('grrUi.forms.semanticProtoRepeatedFieldFormDirective');
const {SemanticProtoSingleFieldFormDirective} = goog.require('grrUi.forms.semanticProtoSingleFieldFormDirective');
const {SemanticProtoUnionFormDirective} = goog.require('grrUi.forms.semanticProtoUnionFormDirective');
const {SemanticRegistryService} = goog.require('grrUi.core.semanticRegistryService');
const {SemanticValueFormDirective} = goog.require('grrUi.forms.semanticValueFormDirective');
const {TimerangeFormDirective} = goog.require('grrUi.forms.timerangeFormDirective');
const {coreModule} = goog.require('grrUi.core.core');


/**
 * Angular module for forms-related UI.
 */
exports.formsModule =
    angular.module('grrUi.forms', [coreModule.name, 'ui.bootstrap']);


exports.formsModule.service(
    SemanticRegistryService.forms_service_name, SemanticRegistryService);
exports.formsModule.service(
    SemanticRegistryService.repeated_forms_service_name,
    SemanticRegistryService);


exports.formsModule.directive(
    Aff4AttributeFormDirective.directive_name, Aff4AttributeFormDirective);
exports.formsModule.directive(
    AutoGeneratedAES128KeyFormDirective.directive_name,
    AutoGeneratedAES128KeyFormDirective);
exports.formsModule.directive(
    BytesFormDirective.directive_name, BytesFormDirective);
exports.formsModule.directive(
    ClientLabelFormDirective.directive_name, ClientLabelFormDirective);
exports.formsModule.directive(
    DatetimeFormDirective.directive_name, DatetimeFormDirective);
exports.formsModule.directive(
    DictFormDirective.directive_name, DictFormDirective);
exports.formsModule.directive(
    DurationFormDirective.directive_name, DurationFormDirective);
exports.formsModule.directive(
    GlobExpressionFormDirective.directive_name, GlobExpressionFormDirective);
exports.formsModule.directive(
    GlobExpressionsListFormDirective.directive_name,
    GlobExpressionsListFormDirective);
exports.formsModule.directive(
    OutputPluginDescriptorFormDirective.directive_name,
    OutputPluginDescriptorFormDirective);
exports.formsModule.directive(
    SemanticEnumFormDirective.directive_name, SemanticEnumFormDirective);
exports.formsModule.directive(
    ExtFlagsConditionFormDirective.directive_name,
    ExtFlagsConditionFormDirective);
exports.formsModule.directive(
    ExtFlagsLinuxPickerLongDirective.directive_name,
    ExtFlagsLinuxPickerLongDirective);
exports.formsModule.directive(
    ExtFlagsLinuxPickerShortDirective.directive_name,
    ExtFlagsLinuxPickerShortDirective);
exports.formsModule.directive(
    ExtFlagsOsxPickerDirective.directive_name, ExtFlagsOsxPickerDirective);
exports.formsModule.directive(
    ForemanLabelRuleFormDirective.directive_name,
    ForemanLabelRuleFormDirective);
exports.formsModule.directive(
    SemanticPrimitiveFormDirective.directive_name,
    SemanticPrimitiveFormDirective);
exports.formsModule.directive(
    SemanticProtoFormDirective.directive_name, SemanticProtoFormDirective);
exports.formsModule.directive(
    SemanticProtoSingleFieldFormDirective.directive_name,
    SemanticProtoSingleFieldFormDirective);
exports.formsModule.directive(
    SemanticProtoRepeatedFieldFormDirective.directive_name,
    SemanticProtoRepeatedFieldFormDirective);
exports.formsModule.directive(
    SemanticProtoUnionFormDirective.directive_name,
    SemanticProtoUnionFormDirective);
exports.formsModule.directive(
    SemanticValueFormDirective.directive_name, SemanticValueFormDirective);
exports.formsModule.directive(
    TimerangeFormDirective.directive_name, TimerangeFormDirective);


exports.formsModule.run(function(grrSemanticFormDirectivesRegistryService) {
  var registry = grrSemanticFormDirectivesRegistryService;

  registry.registerDirective(
      Aff4AttributeFormDirective.semantic_type, Aff4AttributeFormDirective);
  registry.registerDirective(
      AutoGeneratedAES128KeyFormDirective.semantic_type,
      AutoGeneratedAES128KeyFormDirective);
  registry.registerDirective(
      BytesFormDirective.semantic_type, BytesFormDirective);
  registry.registerDirective(
      DatetimeFormDirective.semantic_type, DatetimeFormDirective);

  var dictSemanticTypes = DictFormDirective.semantic_types;
  angular.forEach(dictSemanticTypes, function(dictSemanticType) {
    registry.registerDirective(dictSemanticType, DictFormDirective);
  });

  registry.registerDirective(
      DurationFormDirective.semantic_type, DurationFormDirective);

  registry.registerDirective(
      ExtFlagsConditionFormDirective.semantic_type,
      ExtFlagsConditionFormDirective);

  registry.registerDirective(
      GlobExpressionFormDirective.semantic_type, GlobExpressionFormDirective);

  registry.registerDirective(
      OutputPluginDescriptorFormDirective.semantic_type,
      OutputPluginDescriptorFormDirective);

  var primitiveSemanticTypes = SemanticPrimitiveFormDirective.semantic_types;
  angular.forEach(primitiveSemanticTypes, function(primitiveSemanticType) {
    registry.registerDirective(
        primitiveSemanticType, SemanticPrimitiveFormDirective);
  });

  registry.registerDirective(
      SemanticEnumFormDirective.semantic_type, SemanticEnumFormDirective);
  registry.registerDirective(
      ForemanLabelRuleFormDirective.semantic_type,
      ForemanLabelRuleFormDirective);
  registry.registerDirective(
      SemanticProtoFormDirective.semantic_type, SemanticProtoFormDirective);
});

exports.formsModule.run(function(
    grrSemanticRepeatedFormDirectivesRegistryService) {
  var registry = grrSemanticRepeatedFormDirectivesRegistryService;

  registry.registerDirective(
      GlobExpressionsListFormDirective.semantic_type,
      GlobExpressionsListFormDirective);
});
