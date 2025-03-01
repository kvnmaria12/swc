use crate::{Function, MediaQuery, Str, UrlValue};
use swc_common::{ast_node, Span};

#[ast_node]
pub enum ImportSource {
    #[tag("Function")]
    Function(Function),

    #[tag("UrlValue")]
    Url(UrlValue),

    #[tag("Str")]
    Str(Str),
}

#[ast_node("ImportRule")]
pub struct ImportRule {
    pub span: Span,
    pub src: ImportSource,
    pub condition: Option<MediaQuery>,
}
