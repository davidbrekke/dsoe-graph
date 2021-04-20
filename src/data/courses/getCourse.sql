SELECT [course_id]
      ,[term_id]
      ,[course_title]
      ,[course_code]
      ,[course_description]
      ,[credits]
      ,[prerequisite_id]
      ,[program_id]
      ,[required]
      ,[instruction_type]
      ,[category]
      ,[sub_category]
      ,[date_added]
      ,[date_modified]
      ,[date_deleted]
      ,[inserted_by]
      ,[updated_by]
      ,[comment_set_id]
  FROM [advising].[COURSE_TBL]
  WHERE [course_id] = @course_id

  -- Same idea below, but joining like I did in the getAllCourses so we have values instead of id's

select a.course_title, b.season, b.class_level, a.course_code, a.course_description,
a.credits, a.prerequisite_id, c.program_name, a.required, a.instruction_type, a.category, a.sub_category,
a.date_added, a.date_modified, a.date_deleted, a.inserted_by, a.updated_by, a.comment_set_id
from advising.COURSE_TBL a LEFT JOIN advising.TERM_TBL b on a.term_id = b.term_id LEFT JOIN advising.PROGRAM_TBL c on a.program_id = c.program_id
WHERE a.course_id = @course_id;