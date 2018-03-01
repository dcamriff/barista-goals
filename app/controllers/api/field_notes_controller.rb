class Api::FieldNotesController < ApplicationController
    def index
        puts params
        @field_notes = Category.find(params[:category_id]).field_notes.order(created_at: :desc)
        render json: @field_notes
      end
    
      def create
        @field_note = FieldNote.create!(field_note_params)
        render json: @field_note
      end
    
      def show
        render json: @field_note
      end
    
      def update
        @field_note = FieldNote.find(params[:id])
        @field_note.update!(field_note_params)
        render json: @field_note
      end
    
      def destroy
        @field_note = FieldNote.find(params[:id]).delete
        render status: :ok
      end
    
      private
      
      def field_note_params
        params.require(:field_note).permit(:title, :memo, :image, :tags, :year)
      end
end
