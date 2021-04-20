select a.course_id, a.course_title, b.season, b.class_level, a.course_code, a.course_description,
a.credits, a.prerequisite_id, c.program_name, a.required, a.instruction_type, a.category, a.sub_category,
a.date_added, a.date_modified, a.date_deleted, a.inserted_by, a.updated_by, a.comment_set_id
from advising.COURSE_TBL a LEFT JOIN advising.TERM_TBL b on a.term_id = b.term_id LEFT JOIN advising.PROGRAM_TBL c on a.program_id = c.program_id;